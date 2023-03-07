import Garderie from '../images/Garderie.png'
import BankApp from '../images/BankApp.png'
import NationRecipe from '../images/NationRecipe.png'
import NyanShark from '../images/NyanShark.png'

const projects = [
    {
        id:0,
        name:'Bank App',
        desc:'full-stack virtual banking Application, including account balance, Transactions and user information,  and the ability to transfer funds between accounts, with login and authentication protocols.',
        ss: Garderie,
        stackUsed:['Java', 'SpringBoot', 'JPA', 'lombok' , 'SQL', 'MySQL', 'React', 'CSS', 'HTML']
    },
    {
        id:1,
        name:'Garderie App',
        desc:'Kindergarten comprehensive registration full-stack portal.',
        ss:BankApp,
        stackUsed:['Java', 'SpringBoot', 'JDBC', 'lombok' , 'SQL', 'MySQL', 'React', 'CSS', 'HTML']
    },
    {
        id:2,
        name:'Nations Recipe App',
        desc:'A full-stack app with user login and authentication protocols to search different recipes & add to or remove favorite foods from their profiles',
        ss:NationRecipe,
        stackUsed:['React','Node.js','MongoDB','SCSS', 'HTML']
    },
  
    {
        id:3,
        name:'Nyan Shark',
        desc:' Nyan Shark game',
        ss:NyanShark,
        stackUsed:['HTML','CSS','Javascript']
    },
]

export default projects