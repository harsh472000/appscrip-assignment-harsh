import Shopping from '../assets/Shopping.svg'
import Profile from '../assets/Profile.svg'
import Search from '../assets/Search.svg'
import Heart from '../assets/Heart.svg'

export const HEADER_TEXT = [
    'Lorem isup doller',
    'Lorem isup doller',
    'Lorem isup doller',
]

export const NAVBAR_ICONS = [
    Shopping,Profile,Search,Heart
]

export const NAVBAR_LINKS = [
    {href:"#", key:'home', label:"Shop"},
    {href:"#", key:'skills', label:"Skills"},
    {href:"#", key:'stories', label:"Stories"},
    {href:"#", key:'about', label:"About"},
    {href:"#", key:'contact-us', label:"Contact Us"}
]

export const SORTINGMENU = [
    {value:"recommended", label:"recommended"},
    {value:"newest_first", label:"Newest first"},
    {value:"popular", label:"popular"},
    {value:"highToLow", label:"Price : high to low"},
    {value:"lowToHigh", label:"Price : low to high"}
] 

export const FILTERDATA = [
    { title: 'Gender', options: ["Men", "Women", "Baby & Kids"] },
    { title: 'Occasion', options: ["Rainy Season", "Casual", "Wedding", "Party", "Regular"] },
    { title: 'Work', options: ["French Knot", "Zardosi", "Fancy", "Embroidery"] },
    { title: 'Fabric', options: ["Muslin", "Satin Blend", "Satin", "Tericoat", "Linen", "Raw Silk", "Cotton", "Silk"] },
    { title: 'Segment', options: ["Silver", "Ethnic", "Contemporary"] },
    { title: 'Suitable For', options: ["Formal Wear", "Western Wear", "Casual Wear"] },
    { title: 'Materials', options: ["Wool", "Silk", "Leather", "Cotton", "Cellulosic Fibers"] },
    { title: 'Pattern', options: ["Windowpane", "Pinstripes", "Solid", "Chalk Stripes", "Slim Fit", "Tartan"] }
  ];

export const FOOTERLEFTLINKS = [
    {href:"#", key:'aboutus', label:"About Us"},
    {href:"#", key:'stories', label:"Stories"},
    {href:"#", key:'artisans', label:"Artisans"},
    {href:"#", key:'boutiques', label:"Boutiques"},
    {href:"#", key:'contact-us', label:"Contact Us"},
    {href:"#", key:'docs', label:"EU Compliances Docs"}
    
]