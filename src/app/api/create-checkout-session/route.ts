import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      )
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'cad',
        product_data: {
          name: item.name,
          description: `Handcrafted wooden piece from Alpine Woodworks YYC`,
          images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'], // Placeholder image
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/cart`,
      metadata: {
        items: JSON.stringify(items),
      },
      shipping_address_collection: {
        allowed_countries: ['CA', 'US'], // Canada and US
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500, // $15.00 in cents
              currency: 'cad',
            },
            display_name: 'Standard shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 3000, // $30.00 in cents
              currency: 'cad',
            },
            display_name: 'Express shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
      ],
      customer_email: undefined, // Will be collected during checkout
      locale: 'en',
      submit_type: 'pay',
      billing_address_collection: 'required',
      tax_id_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
