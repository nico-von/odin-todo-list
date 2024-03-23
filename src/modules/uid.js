export default function(prefix = ""){
   return prefix.concat(Date.now(), Date.now() * Math.random());
}