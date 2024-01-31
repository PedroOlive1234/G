const inventoryDateBase = [
   { 
    name: "Pontions Secetion",
    items: '',
    },
   { 
    name: "Armor Secetion",
    items: '',
    },
   { 
    name: "Weapons Secetion",
    items: '',
    },
]
const vendor = document.querySelector('#vendor');
const inventoryContainer = document.querySelector('#inventory');




function openInventoryOnClick(){
    inventoryDateBase.forEach((item)=>{
        console.log(item.name)

    })

}
vendor.addEventListener('click', openInventoryOnClick)