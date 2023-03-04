let num=13;
let flag=true;
for(let i=0;i<=num;i++)
{
	if(num%i==0)
	{
		flag=false;
	        console.log("Yes");
		break;
	}
}
if(flag==false)
{
   console.log("No");
}