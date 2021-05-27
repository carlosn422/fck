


export type users = {firstName:string, lastName:string, __typename:string}


  export type Group  = Array<{
    name: string,
    users : users[];
    timed : string,
    __typename: string

  }>

  export type items = {
    
    item: string
    __typename: string
  }

export type  Order = {
  
  OrderType: string,
  order: string,
  group: Group[];
  cart:items[],
  payments : number,
  timed : string, 
  users : users[],
  splitPay: SplitPay[];
  __typename: string,
  id:any,
}

export type SplitPayFriend  ={
  
    name: string,
    phone: string,
    splitAmount : number,
    email : string,
    __typename:string,
    filter: string,
    friend: string,
    id:any,
    
  }


  export type SplitFriend  = {
    id:any,
    name: string,
  phone: string,
  splitAmount : number,
  email : string,
  __typename:string,
 // filter: string,
 // friend: string,
  
}

export type SplitPay = {
  
  isSplitPay: boolean,
  splitType: string,
  friends: SplitFriend[];
  __typename: string,
    }

  export type Payment = {
    purchaserName: string,
    amountOwed : number,
    stripeToken: string,
    splitPay: SplitPay ,
    __typename:string,
    }
  
    

  export type CurrentOrder = {
    lastName : string,
    firstName: string,
    email : string,
    address: string,
    groupName : string,
    phone: string,
    __typename: string,

   
  }



  
    
  

 

