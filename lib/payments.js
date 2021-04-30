import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIKE_API_KEY);

export async function initiateCheckout({lineItems} = {}) {
    console.log('-------------222222process.env.NEXT_PUBLIC_STRIKE_API_KEY', process.env)
    // initialte session with Stripe
    // 1- install: yarn add @stripe/stripe-js

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
    })
}