import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render Clouds", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"clouds"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Fog", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"fog"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Clear", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"clear"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Rain", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"rain"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Snow", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"snow"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Drizzle", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"drizzle"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
test("Weather render Thunderstorm", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"thunderstorm"}/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})