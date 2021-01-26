const definirCompra = (n) =>{
    let money = prompt(`Dinero de ${n}`);
    if (n == 'Cofla') {
        if (money >= 0.6 && money < 1)   return `Cofla: helado de agua y te sobra ${(money - 0.6).toFixed(1)}`;
        if (money >= 1   && money < 1.6) return `Cofla: helado de crema y te sobra ${(money - 1).toFixed(1)}`;
        if (money >= 1.6 && money < 1.7) return `Cofla: helado de heladix y te sobra ${(money - 1.6).toFixed(1)}`;
        if (money >= 1.7 && money < 1.8) return `Cofla: helado de heladovich y te sobra ${(money - 1.7).toFixed(1)}`;
        if (money >= 1.8 && money < 2.9) return `Cofla: helado de helardo y te sobra ${(money - 1.8).toFixed(1)}`;
        if (money >= 2.9)                return `Cofla: helado de confite y el 1/4 kg te sobra ${( money - 2.9).toFixed(1)}`;
        else                             return `Cofla: No te alcanza para ningun helado`
    }else
    {
        if (money >= 0.6 && money < 1)   return `${n}: Cofla: helado de agua`;
        if (money >= 1   && money < 1.6) return `${n}: helado de crema`;
        if (money >= 1.6 && money < 1.7) return `${n}: helado de heladix`;
        if (money >= 1.7 && money < 1.8) return `${n}: helado de heladovich`;
        if (money >= 1.8 && money < 2.9) return `${n}: helado de helardo`;
        if (money >= 2.9)                return `${n}: helado de confite y el 1/4 kg`;
        else                             return `${n}: No te alcanza para ningun helado`;
    }
}

alert(definirCompra("Cofla"));
alert(definirCompra("Pedro"));
alert(definirCompra("Roberto"));