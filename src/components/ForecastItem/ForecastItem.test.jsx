import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'

test("ForecastItem render", async () => {
    const { findByText } = render(<ForecastItem weekDay="Lunes" hour={10} state="clear" temperature={23} />)
    
    const hour = await findByText(/10/)
    const temp = await findByText(/23/)
    
    expect(hour).toHaveTextContent("10")
    expect(temp).toHaveTextContent("23 °")
})
