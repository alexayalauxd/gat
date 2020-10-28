import React from "react"
import { API } from "aws-amplify"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51HYwv2Eqyr7A4WY0J5wrBi7yolgoTiuS5HyfWHjaQjjWK3wkhus4Xy9055T9kcysPvAmT5XTIWDU2sgcq90vw5n800CWygIs9x")

const CheckoutButton = () => {
  const redirectToCheckout = async () => {
    const fetchSession = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/checkout"
      const body = {
        quantity: 1,
        client_reference_id: "UniqueString",
        priceId: "price_1GuxxSBwl4TwghDgsuUB0RGd",
      }
      const session = await API.post(apiName, apiEndpoint, { body })
      return session
    }

    const session = await fetchSession()
    const sessionId = session.id
    const stripe = await stripePromise
    stripe.redirectToCheckout({ sessionId })
  }

  return <button onClick={redirectToCheckout}>Pay</button>
}

export default CheckoutButton