import React from "react";
import "./Elements.css";
import Group1 from './Group1';
import Group2 from './Gtoup2';
import Group3L from './Group3L';
import Group3A from './Group3A';
import Group3 from './Group3';
import Group4 from './Group4';
import Group5 from './Group5';
import Group6 from './Group6';
import Group7 from './Group7';
import Group8 from './Group8';
import Group9 from './Group9';
import Group10 from './Group10';
import Group11 from './Group11';
import Group12 from './Group12';
import Group13 from './Group13';
import Group14 from './Group14';
import Group15 from './Group15';
import Group16 from './Group16';
import Group17 from './Group17';
import Group18 from './Group18';

function ElementsTable() {
  return (
    <>
    <div className="ElementsTable">
      <Group1 text="H" style={{  backgroundColor: "#baead4" }} number={1} name="Hydrogen" mass={1.00797}/>
      <Group1 text="Li" number={3} name="Lithium" mass={6.941} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group1 text="Na" number={11} name="Sodium" mass={22.989} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group1 text="K" number={19} name="Potassium" mass={39.0983} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group1 text="Rb" number={37} name="Rubidium" mass={85.4678} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group1 text="Cs" number={55} name="Cesium" mass={132.9054} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group1 text="Fr" number={87} name="Francium" mass={(223)} style={{  backgroundColor: "#f6b3d5" }}/>
      <Group2 text="Be" number={4} name="Beryllium" mass={9.01218} style={{  backgroundColor: "#eeb654" }}/>
      <Group2 text="Mg" number={12} name="Magnesium" mass={24.305} style={{  backgroundColor: "#eeb654" }}/>
      <Group2 text="Ca" number={20} name="Calcium" mass={40.08} style={{  backgroundColor: "#eeb654" }}/>
      <Group2 text="Sr" number={38} name="Strontium" mass={87.62} style={{  backgroundColor: "#eeb654" }}/>
      <Group2 text="Ba" number={56} name="Barium" mass={137.33} style={{  backgroundColor: "#eeb654" }}/>
      <Group2 text="Ra" number={88} name="Radium" mass={226.0254} style={{  backgroundColor: "#eeb654" }}/>
      <Group3 text="Sc" number={21} name="Scandium" mass={44.9559} style={{  backgroundColor: "#e1ea37" }}/>
      <Group3 text="Y" number={39} name="Yttrium" mass={88.9059} style={{  backgroundColor: "#e1ea37" }}/>
      <Group3 text="La" style={{  backgroundColor: "#d09cea" }} number={57} name="Lanthanum" mass={138.9055}/>
      <Group3 text="Ac" style={{  backgroundColor: "#d09cea" }} number={89} name="Actinium" mass={227.0278}/>
      <Group4 text="Ti" number={22} name="Titanium" mass={47.90}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group4 text="Zr" number={40} name="Zirconium" mass={91.22}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group4 text="Hf" number={72} name="Hafnium" mass={178.49}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group4 text="Rf" number={104} name="Rutherfordium" mass={1.00797}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group5 text="V" number={23} name="Vanadium" mass={50.9415}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group5 text="Nb" number={41} name="Niobium" mass={92.9064}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group5 text="Ta" number={73} name="Tantalum" mass={180.9479}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group5 text="Db" number={105} name="Dubnium" mass={262}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group6 text="Cr" number={24} name="Chromium" mass={51.996}  style={{  backgroundColor: "#e1ea37" }}/>
      <Group6 text="Mo" number={42} name="Molybdenum" mass={95.94} style={{  backgroundColor: "#e1ea37" }}/>
      <Group6 text="W" number={74} name="Tungsten" mass={183.85} style={{  backgroundColor: "#e1ea37" }}/>
      <Group6 text="Sg" number={106} name="Seaborgium" mass={263} style={{  backgroundColor: "#e1ea37" }}/>
      <Group7 text="Mn" number={25} name="Manganese" mass={54.9380} style={{  backgroundColor: "#e1ea37" }}/>
      <Group7 text="Tc" number={43} name="Technetium" mass={98} style={{  backgroundColor: "#e1ea37" }}/>
      <Group7 text="Re" number={75} name="Rhenium" mass={186.207} style={{  backgroundColor: "#e1ea37" }}/>
      <Group7 text="Bh" number={107} name="Bohrium" mass={262} style={{  backgroundColor: "#e1ea37" }}/>
      <Group8 text="Fe" number={26} name="Iron" mass={55.847} style={{  backgroundColor: "#e1ea37" }}/>
      <Group8 text="Ru" number={44} name="Ruthenium" mass={101.07} style={{  backgroundColor: "#e1ea37" }}/>
      <Group8 text="Os" number={76} name="Osmium" mass={190.2} style={{  backgroundColor: "#e1ea37" }}/>
      <Group8 text="Hs" number={108} name="Hassium" mass={(255)} style={{  backgroundColor: "#e1ea37" }}/>
      <Group9 text="Co" number={27} name="Cobalt" mass={58.9332} style={{  backgroundColor: "#e1ea37" }}/>
      <Group9 text="Rh" number={45} name="Rhodium" mass={102.9055} style={{  backgroundColor: "#e1ea37" }}/>
      <Group9 text="Ir" number={77} name="Iridium" mass={192.22} style={{  backgroundColor: "#e1ea37" }}/>
      <Group9 text="Mt" number={109} name="Meitnerium" mass={(256)} style={{  backgroundColor: "#e1ea37" }}/>
      <Group10 text="Ni" number={29} name="Nickel" mass={58.70} style={{  backgroundColor: "#e1ea37" }}/>
      <Group10 text="46" number={46} name="Palladium" mass={106.4} style={{  backgroundColor: "#e1ea37" }}/>
      <Group10 text="Pt" number={78} name="Platinum" mass={195.09} style={{  backgroundColor: "#e1ea37" }}/>
      <Group10 text="Ds" number={110} name="Darmstadtium" mass={(269)} style={{  backgroundColor: "#e1ea37" }}/>
      <Group11 text="Cu" number={29} name="Copper" mass={63.546} style={{  backgroundColor: "#e1ea37" }}/>
      <Group11 text="Ag" number={47} name="Silver" mass={107.868} style={{  backgroundColor: "#e1ea37" }}/>
      <Group11 text="Au" number={79} name="Gold" mass={196.9665} style={{  backgroundColor: "#e1ea37" }}/>
      <Group11 text="Rg" number={111} name="Roentgenium" mass={(272)} style={{  backgroundColor: "#e1ea37" }}/>
      <Group12 text="Zn" number={30} name="Zinc" mass={1.00797} style={{  backgroundColor: "#e1ea37" }}/>
      <Group12 text="Cd" number={18} name="Cadmium" mass={112.41} style={{  backgroundColor: "#e1ea37" }}/>
      <Group12 text="Hg" number={80} name="Mercury" mass={200.59} style={{  backgroundColor: "#e1ea37" }}/>
      <Group12 text="Cn" number={112} name="Copernicium " mass={285} style={{  backgroundColor: "#e1ea37" }}/>
      <Group13 text="B" style={{  backgroundColor: "#e1ea37" }} number={5} name="Boron" mass={10.81}/>
      <Group13 text="Al" number={13} name="Aluminum" mass={26.98154} style={{  backgroundColor: "#83bfea" }}/>
      <Group13 text="Ga" number={31} name="Gallium" mass={69.72} style={{  backgroundColor: "#83bfea" }}/>
      <Group13 text="In" number={49} name="Indium" mass={114.82} style={{  backgroundColor: "#83bfea" }}/>
      <Group13 text="Tl" number={90} name="Thallium" mass={204.37} style={{  backgroundColor: "#83bfea" }}/>
      <Group13 text="Nh" number={113} name="Nihonium" mass={286} style={{  backgroundColor: "#83bfea" }}/>
      <Group14 text="C" number={6} name="Carbon" mass={12.011} style={{  backgroundColor: "#83bfea" }}/>
      <Group14 text="Si" style={{  backgroundColor: "#e1ea37" }} number={14} name="Silicon" mass={28.0855}/>
      <Group14 text="Ge" style={{  backgroundColor: "#e1ea37" }} number={32} name="Germanium" mass={72.59}/>
      <Group14 text="Sn" number={50} name="Tin" mass={118.69} style={{  backgroundColor: "#83bfea" }}/>
      <Group14 text="Pb" number={82} name="Lead" mass={207.2} style={{  backgroundColor: "#83bfea" }}/>
      <Group14 text="Fl" number={114} name="Flerovium" mass={289} style={{  backgroundColor: "#83bfea" }}/>
      <Group15 text="N" number={7} name="Nitrogen" mass={14.0067} style={{  backgroundColor: "#83bfea" }}/>
      <Group15 text="P" number={15} name="Phosphorus" mass={30.97376} style={{  backgroundColor: "#83bfea" }}/>
      <Group15 text="As" style={{  backgroundColor: "#e1ea37" }} number={33} name="Arsenic" mass={74.9216}/>
      <Group15 text="Sb" style={{  backgroundColor: "#e1ea37" }} number={51} name="Antimony" mass={121.75}/>
      <Group15 text="Bi" number={83} name="Bismuth" mass={208.9804} style={{  backgroundColor: "#83bfea" }}/>
      <Group15 text="Mc" number={115} name="Moscovium" mass={289} style={{  backgroundColor: "#83bfea" }}/>
      <Group16 text="O" number={8} name="Oxygen" mass={16} style={{  backgroundColor: "#83bfea" }}/>
      <Group16 text="S" number={16} name="Sulfer" mass={32.066} style={{  backgroundColor: "#83bfea" }}/>
      <Group16 text="Se" number={34} name="Selenium" mass={78.971} style={{  backgroundColor: "#83bfea" }}/>
      <Group16 text="Te" style={{  backgroundColor: "#e1ea37" }} number={52} name="Tellurium" mass={127.60}/>
      <Group16 text="Po" number={84} name="Polonium" mass={208.992} style={{  backgroundColor: "#83bfea" }}/>
      <Group16 text="Lv" number={116} name="Livermorium" mass={293} style={{  backgroundColor: "#83bfea" }}/>
      <Group17 text="F" number={9} name="Polonium" mass={18.998403} style={{  backgroundColor: "#34e76a" }}/>
      <Group17 text="Cl" number={17} name="Chlorine" mass={35.453} style={{  backgroundColor: "#34e76a" }}/>
      <Group17 text="Br" number={35} name="Bromine" mass={79.904} style={{  backgroundColor: "#34e76a" }}/>
      <Group17 text="I" number={53} name="Iodine" mass={126.9045} style={{  backgroundColor: "#34e76a" }}/>
      <Group17 text="At" style={{  backgroundColor: "#e1ea37" }} number={85} name="Astatine" mass={210}/>
      <Group17 text="Ts" style={{  backgroundColor: "#e1ea37" }} number={117} name="Tennessine" mass={294}/>
      <Group18 text="He" number={2} name="Helium" mass={4.00260} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Ne" number={10} name="Neon" mass={20.180} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Ar" number={18} name="Argon" mass={39.948} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Kr" number={36} name="Krypton" mass={83.80} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Xe" number={54} name="Xenon" mass={131.30} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Rn" number={86} name="Radon" mass={222} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      <Group18 text="Og" number={118} name="Oganesson" mass={294} style={{  backgroundColor: "#6785e7", color:"white" }}/>
      
      <Group3A text="La" style={{  backgroundColor: "#d09cea" }} number={57} name="Lanthanum" mass={138.9055}/>
      <Group3A text="Ce" style={{  backgroundColor: "#d09cea" }} number={58} name="Cerium" mass={140.12}/>
      <Group3A text="Pr" style={{  backgroundColor: "#d09cea" }} number={59} name="Praseodymium" mass={140.9077}/>
      <Group3A text="Nd" style={{  backgroundColor: "#d09cea" }} number={60} name="Neodymium" mass={144.24}/>
      <Group3A text="Pm" style={{  backgroundColor: "#d09cea" }} number={61} name="Promethium" mass={145}/>
      <Group3A text="Sm" style={{  backgroundColor: "#d09cea" }} number={62} name="Samarium" mass={150.4}/>
      <Group3A text="Eu" style={{  backgroundColor: "#d09cea" }} number={63} name="Europium" mass={151.96}/>
      <Group3A text="Gd" style={{  backgroundColor: "#d09cea" }} number={64} name="Gadolinium" mass={157.25}/>
      <Group3A text="Tb" style={{  backgroundColor: "#d09cea" }} number={65} name="Terbium" mass={158.9254}/>
      <Group3A text="Dy" style={{  backgroundColor: "#d09cea" }} number={66} name="Dysprosium" mass={162.50}/>
      <Group3A text="Ho" style={{  backgroundColor: "#d09cea" }} number={67} name="Holmium" mass={164.9304}/>
      <Group3A text="Er" style={{  backgroundColor: "#d09cea" }} number={68} name="Erbium" mass={167.26}/>
      <Group3A text="Tm" style={{  backgroundColor: "#d09cea" }} number={69} name="Thulium" mass={168.9342}/>
      <Group3A text="Yb" style={{  backgroundColor: "#d09cea" }} number={70} name="Ytterbium" mass={173.04}/>
      <Group3A text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>
      <Group3L text="Lu" style={{  backgroundColor: "#d09cea" }} number={71} name="Lutetium" mass={174.967}/>

      
      </div>
    </>
  );
}

export default ElementsTable;
