import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Checkout } from "../pages/Checkout"
import { CheckoutSuccess } from "../pages/CheckoutSuccess"
import { DefaultLayout } from "../layout/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/checkout/success" element={<CheckoutSuccess />}/>
      </Route>
    </Routes>
  )
}