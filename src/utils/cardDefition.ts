interface CardDefition {
    title: string,
    poem: string | string[],
    price: [number, number],
    attrs: [number, number, number],
    color: string,
    entries: EntryDefition[],
  }
  
  type QuotedString = [string]
  
  type AttrAddition = {
    "type": "attrAddition",
    "attrs": [number, number, number],
  }

  type HyperText = string | QuotedString | AttrAddition
  
  interface EntryDefition {
    title: string,
    color: string,
    desc: string | HyperText[],
  }

  export {
    type HyperText,
    type CardDefition,
    type EntryDefition,
  }