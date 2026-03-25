


const calBtn = document.querySelector("#calculate")
const btn = document.getElementById("calculate")


calBtn.addEventListener("click", function(){
    const amount = Number(document.querySelector("#amount").value)
    const discount = Number(document.querySelector("#discount").value)
    const output = document.querySelector("#output")

    if(!amount || !discount){
        return alert("Please enter a valid amount and discount")
    }

    const discountPrice = amount - ( (discount / 100) * amount)
    const discountedPrice = (discount / 100) * amount

    output.innerHTML = `
    Discount price = &#8358; ${Intl.NumberFormat().format(discountPrice)} and Discounted Price = &#8358; ${Intl.NumberFormat().format(discountedPrice)}
    `

})

btn.addEventListener("mouseenter", function(){
    btn.style.backgroundColor = 'blue'
    btn.style.color = 'white'
    btn.style.padding = '10px 20px'
    btn.style.borderRadius = "10px"
    btn.style.border = "none"

})

btn.addEventListener("mouseleave", function(){
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    btn.style.padding = '10px 20px'
    btn.style.borderRadius = "10px"
    btn.style.border = "none"

})