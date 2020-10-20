import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render Cloud", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"cloud"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render Cloudy", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"cloudy"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render Fog", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"fog"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render Sunny", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"sunny"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render Rain", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"rain"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
