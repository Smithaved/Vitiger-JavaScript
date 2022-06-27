var num=[2,4,5,6,7,9,11]
var flag=true
num.forEach(element => {
    for(var i=2;i<element;i++)
    {
        if(element%i==0)
        {
            flag=false
            break
        }
        else
        {
            flag=true
        }
    }
if(flag==true)
{
    console.log(element);
}
});