import React, { useState } from 'react';
import { supabase } from '../client';
import warrior from "../images/warrior.png";
import mage from "../images/mage.png";
import healer from "../images/healer.png";
import rouge from "../images/rouge.png";

function Create() {
    const [hero, setHero] = useState({ name: "", level: 1, class: "", imageUrl: "" });

    const handleClassChange = (event) => {
      const selectedClass = event.target.value;

      let imageUrl = "";
      switch (selectedClass) {
        case "Warrior":
          imageUrl = warrior;
          break;
        case "Mage":
          imageUrl = mage;
          break;
        case "Healer":
          imageUrl = healer;
          break;
        case "Rogue":
          imageUrl = rouge;
          break;
        default:
          imageUrl = "";
      }
      setHero({ ...hero, class: selectedClass, imageUrl: imageUrl });
    };

    const validateForm = () => {
        const errors = {};
        if (!hero.name.trim()) {
            errors.name = "Name is required";
        }
        if (!hero.level) {
            errors.level = "Level is required";
        } else if (hero.level < 1 || hero.level > 99) {
            errors.level = "Level must be between 1 and 99";
        }
        if (!hero.class) {
            errors.class = "Class is required";
        }
        return errors;
    };

    const createHero = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            await supabase
                .from('characters')
                .insert({ 
                    name: hero.name, 
                    level: hero.level, 
                    class: hero.class,
                    imageUrl: hero.imageUrl // Insert imageUrl here
                })
                .select();
            window.location = "/";
        } else {
            // Handle errors
            console.error("Form errors:", formErrors);
        }
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setHero({ ...hero, [name.toLowerCase()]: value }); // Use lowercase keys
    };
    

    const errors = validateForm();

    return (
        <div className='create'>
        <h1>Create your Hero!</h1>
        <h3>How will your Hero turn out?</h3>
        {hero.imageUrl && <img src={hero.imageUrl} alt="Hero" style={{ width: '160px', height: '220px' }} />}
        <form onSubmit={createHero} className="form-container">
            <div className="form-row">
                <label>
                    Name:
                    <input type="text" name="name" value={hero.name} onChange={handleChange} placeholder={errors.name} />
                </label>
                <label>
                    Level:
                    <input type="number" name="level" value={hero.level} onChange={handleChange} min={1} max={99} placeholder={errors.level} />
                </label>
                <label>
                    Class:
                    <select name="class" value={hero.class} onChange={(event) => {handleChange(event);handleClassChange(event);}} placeholder={errors.class}>
                        <option value="">Select Class</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Mage">Mage</option>
                        <option value="Healer">Healer</option>
                        <option value="Rogue">Rogue</option>
                    </select>
                </label>
            </div>
            <button type="submit">Create Hero</button>
        </form>
    </div>
);
}

export default Create;
