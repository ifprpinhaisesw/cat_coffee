document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cartId = document.getElementById('cart_id').value;
    const itemId = document.getElementById('item_id').value;
    const quantity = document.getElementById('quantity').value;

    fetch('/api/cart_item', {  // Ajuste a URL de acordo com o seu endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_JWT_TOKEN'  // Substitua pelo token JWT se necessário
        },
        body: JSON.stringify({
            cart_id: cartId,
            item_id: itemId,
            quantity: quantity
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'Item adicionado com sucesso!';
        document.getElementById('add-item-form').reset();
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Erro ao adicionar item. Tente novamente.';
        console.error('Error:', error);
    });
});