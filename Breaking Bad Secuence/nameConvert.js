/*
@input string [a-Z]
@return string[] [word1, ...]

Eliseo -> [ E[Li]seo, El[I]seo, ...]
no matches? -> str['']

index 1 / E  [""] i  s  e  o
          0   1   2  3  4  5

Test 2 Cecy > ["[C]ecy", "[Ce]cy", "Ce[C]y", "Cec[Y]"]

*/

let elements = [['al','[Al]'],['am','[Am]'],['sb','[Sb]'],['ar','[Ar]'],['as','[As]'],['at','[At]'],['ba','[Ba]'],['bk','[Bk]'],['be','[Be]'],['bi','[Bi]'],['bh','[Bh]'],['b','[B]'],['br','[Br]'],['cd','[Cd]'],['ca','[Ca]'],['cf','[Cf]'],['c','[C]'],['ce','[Ce]'],['cs','[Cs]'],['cl','[Cl]'],['cr','[Cr]'],['co','[Co]'],['cn','[Cn]'],['cu','[Cu]'],['cm','[Cm]'],['ds','[Ds]'],['db','[Db]'],['dy','[Dy]'],['es','[Es]'],['er','[Er]'],['eu','[Eu]'],['fm','[Fm]'],['fl','[Fl]'],['f','[F]'],['fr','[Fr]'],['gd','[Gd]'],['ga','[Ga]'],['ge','[Ge]'],['au','[Au]'],['hf','[Hf]'],['hs','[Hs]'],['he','[He]'],['ho','[Ho]'],['h','[H]'],['in','[In]'],['i','[I]'],['ir','[Ir]'],['fe','[Fe]'],['kr','[Kr]'],['la','[La]'],['lr','[Lr]'],['pb','[Pb]'],['li','[Li]'],['lv','[Lv]'],['lu','[Lu]'],['mg','[Mg]'],['mn','[Mn]'],['mt','[Mt]'],['md','[Md]'],['hg','[Hg]'],['mo','[Mo]'],['mc','[Mc]'],['nd','[Nd]'],['ne','[Ne]'],['np','[Np]'],['ni','[Ni]'],['nh','[Nh]'],['nb','[Nb]'],['n','[N]'],['no','[No]'],['og','[Og]'],['os','[Os]'],['o','[O]'],['pd','[Pd]'],['p','[P]'],['pt','[Pt]'],['pu','[Pu]'],['po','[Po]'],['k','[K]'],['pr','[Pr]'],['pm','[Pm]'],['pa','[Pa]'],['ra','[Ra]'],['rn','[Rn]'],['re','[Re]'],['rh','[Rh]'],['rg','[Rg]'],['rb','[Rb]'],['ru','[Ru]'],['rf','[Rf]'],['sm','[Sm]'],['sc','[Sc]'],['sg','[Sg]'],['se','[Se]'],['si','[Si]'],['ag','[Ag]'],['na','[Na]'],['sr','[Sr]'],['s','[S]'],['ta','[Ta]'],['tc','[Tc]'],['te','[Te]'],['ts','[Ts]'],['tb','[Tb]'],['tl','[Tl]'],['th','[Th]'],['tm','[Tm]'],['sn','[Sn]'],['ti','[Ti]'],['w','[W]'],['u','[U]'],['v','[V]'],['xe','[Xe]'],['yb','[Yb]'],['y','[Y]'],['zn','[Zn]'],['zr','[Zr']];

const chemElements = new Map(elements);
var nameArr = new Array();

function breakingConversion(name){

  if (name == ''){
    nameArr = '';
    return nameArr;
  }
  nameArr = [];
  let tempName = '';
  let currentElem = "";
  let currentKey = '';
  let index = 0;


  [...name].forEach(character => {
    currentKey = character.toLowerCase();
    currentElem = chemElements.get(currentKey);
    if (currentElem != null){
      tempName = name.substring(0, index) + currentElem + name.substring( (index + 1), name.length);
      nameArr.push(tempName);
    }

    // OPTIMIZE: call a function to validate both strings?
    if (index < (name.length - 1)){
      currentKey += name.charAt(index+1);
      currentElem = chemElements.get(currentKey);
      if (currentElem != null){
        tempName = name.substring(0, index) + currentElem + name.substring( (index + 2), name.length);
        nameArr.push(tempName);
      }
    }
    index++;
  });
  return nameArr;
}
