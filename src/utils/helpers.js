export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-NP', {
        style: 'currency',
        format:'decimal',
        currency:'NRP',
    }).format(number/10)
    
    return newNumber
}


export const getUniqueValues = (data,type) => {
    let unique = data.map((item) => item[type])
    return ['all', ...new Set(unique)]
    
}