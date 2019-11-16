export default {
    fileName: `/lib.es2017.object.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface ObjectConstructor{/** * Returns an array of values of the enumerable properties of an object * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. */values<T>(o:{[s:string ]:T}|ArrayLike<T>):T[];/** * Returns an array of values of the enumerable properties of an object * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. */values(o:{}):any [];/** * Returns an array of key/values of the enumerable properties of an object * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. */entries<T>(o:{[s:string ]:T}|ArrayLike<T>):[string ,T][];/** * Returns an array of key/values of the enumerable properties of an object * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. */entries(o:{}):[string ,any ][];/** * Returns an object containing all own property descriptors of an object * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. */getOwnPropertyDescriptors<T>(o:T):{[Pin keyof T]:TypedPropertyDescriptor<T[P]>}&{[x:string ]:PropertyDescriptor};}`
};