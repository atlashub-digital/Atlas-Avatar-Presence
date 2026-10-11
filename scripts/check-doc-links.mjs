import {readdirSync,readFileSync,existsSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
const root=resolve('.');
let failures=0,total=0;
function walk(dir){
 for(const d of readdirSync(dir,{withFileTypes:true})){
  if(['node_modules','.git'].includes(d.name))continue;
  const p=join(dir,d.name);
  if(d.isDirectory())walk(p);
  else if(d.name.endsWith('.md')){
   total++;
   const source=readFileSync(p,'utf8');
   for(const m of source.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)){
    const link=m[1].trim().split(' "')[0].split('#')[0];
    if(!link || /^(https?:|mailto:|data:|file:)/.test(link))continue;
    if(!existsSync(resolve(dirname(p),decodeURIComponent(link)))){
      failures++;console.error('Broken local link',p,link);
    }
   }
  }
 }
}
walk(root);console.log('checked',total,'Markdown documents; broken',failures);
if(failures)process.exitCode=1;
