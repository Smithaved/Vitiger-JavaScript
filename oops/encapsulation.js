class encap{
    a=10
    #data="Hi"
    display()
    {
        console.log(this.#data);
    }
    get data()
    {
        return this.#data
    }
    set dataMsg(value)
    {
        this.#data=value
    }
}
var en=new encap()
console.log(en.data);
en.dataMsg="Hello"
console.log(en.data);