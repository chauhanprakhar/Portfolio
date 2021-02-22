import './skills.css'
import { HorizontalBar } from 'react-chartjs-2'

function Skills(){
    const Data1 = {
        labels: ['Javascript', 'C++', 'Python', 'C', 'Java','swift'],
    datasets: [
      {
        label:'level',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [85, 80, 75, 81, 70,50]
      }
    ]
    }
    const Data2 = {
        labels: ['ReactJS', 'React Native', 'HTML', 'CSS', 'SCSS','ChartJS'],
    datasets: [
      {
        label:'level',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [84, 70, 80, 81, 76,55]
      }
    ]
    }
    
    return (
       <div id="skills">
           <div className="skills-box">
           <div className="skills-container">
               <div style={{flex:'1'}}><h1>About my Skills</h1></div>
               <div className="charts">
                   <div style={{flex:'1'}}>
                    <strong>Programming Languages</strong>
                   <HorizontalBar data={Data1} />
                   </div>
                   <div style={{flex:'1'}}>
                    <strong>Frameworks</strong>
                   <HorizontalBar data={Data2}/>
                   </div>
               </div>
               <div>
                   <h1>About my Services</h1>
               </div>
               <div>
                   <ul>
                       <li>UI/UX Design</li>
                       <li>Frontent Development</li>
                       <li>Database</li>
                       <li>IT Support</li>
                   </ul>
               </div>

           </div>

           </div>
       </div>
    )
}

export default Skills;