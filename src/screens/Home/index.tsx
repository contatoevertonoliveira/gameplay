import React, { useState } from 'react';
import { View } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';
import { Category } from '../../components/Category';

export function Home(){

    const [category, setCategory] = useState('');
    
    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
            <View>
                <View style={styles.header}> 
                <Profile />
                <ButtonAdd />
                </View>
            
                <View>
                    <CategorySelect categorySelected={category}  setCategory={handleCategorySelect} />
                </View>

                {/* <View style={styles.content}>

                </View> */}
            </View>
    );
}