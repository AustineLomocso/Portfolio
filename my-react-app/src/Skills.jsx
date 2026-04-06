import React, {useState} from 'react'
export default function Skills(){
    const skills = [{name: "C",             category: "Languages"},
                    {name: "C++",           category: "Languages"},
                    {name: "Java",          category: "Languages"},
                    {name: "Python",        category: "Languages"},
                    {name: "React",         category: "Frameworks"},
                    {name: "Spring Boot",   category: "Frameworks"},
                    {name: "Django",        category: "Frameworks"},
                    {name: "Godot",         category: "Tools"},
                    {name: "Firebase",      category: "Tools"},
                    {name: "Git",           category: "Tools"},
                    {name: "Figma",         category: "Tools"},
                    {name: "Canva",         category: "Tools"},
    
    ];
    const [activeCategory, setActiveCategory] = useState("All")
    const filteredList = activeCategory === "All" ? skills :  
        skills.filter(skills => skills.category === activeCategory)
    const updateCategory =(category)=>{
        setActiveCategory(category)
    }
    const listItems = filteredList.map(item => <li key = {item.name} className = "skill-item">{item.name}</li>)

    return(
        <>
            
            <div className = "skills">
                <h1>SKILLS</h1>
                <div className = "categories">
                    <button onClick = {()=>updateCategory("All")}>All</button>
                    <button onClick = {()=>updateCategory("Languages")}>Languages</button>
                    <button onClick = {()=>updateCategory("Frameworks")}>Frameworks</button>
                    <button onClick = {()=>updateCategory("Tools")}>Tools</button>
                </div>
                <div >
                    <ul className = "skill-list">{listItems}</ul>
                </div>
            </div>
        </>
    )
}