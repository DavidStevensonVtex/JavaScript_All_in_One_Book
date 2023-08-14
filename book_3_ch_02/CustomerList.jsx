// Listing 2-10: Making a List from an Array

function CustomerList( { customers } ) {
    return (
        <ul>
            { customers.map(customer, () => (
                <li key={customer.id}>
                    {customer.name}, {customer.addresss}, {customer.city},
                    {customer.state}
                </li>
            ))}
        </ul>
    )
}

export default CustomerList ;