// const shoppingCart ={
//     items: [],

//     addItems: function(items){
//         this.items.push(items);
//     },
//     listItems: function(){
//         if(this.items.length===0){
//             console.log("Your Cart is Empty");
//             return;
//         }
//         console.log("Your cart Contains the following items:");
//         this.items.forEach((item,index)=>{
//             console.log(`${index+1}:${item}`);
            
//         })
        
//     }
// }

// shoppingCart.listItems(); // Output: Your Cart is Empty

// shoppingCart.addItems("Laptop");
// shoppingCart.addItems("Smartphone");

// shoppingCart.listItems(); 

//Exercise

const ContactBook = {
    contacts: [],
    
    addcontact: function(name, phone){
        this.contacts.push({name,phone});
        console.log(`Constact ${name} has been added.`);
    },
    listContacts: function(){
        if(this.contacts.length ===0){
            console.log("Your Contact Book is Empty");
            return; 
        }
        console.log("Your Contacts :");
        this.contacts.forEach(({name,phone},index)=>{
            console.log(`${index+1}: ${name} - ${phone}`);
            
        });
        
    },
    findContact: function(name){
        const contact=this.contacts.find(contact =>contact.name===name);
        contact
            ?console.log(`${contact.name}: ${contact.phone}`)
            :console.log(`Contact ${name} not found.`);
            
            
    }
}

ContactBook.listContacts();

ContactBook.addcontact("Chinmay","9130091352");
ContactBook.addcontact("John","1234567890");

ContactBook.listContacts();

ContactBook.findContact("Chinmay");
ContactBook.findContact("Atharv"); // Example of a contact that does not exist