import React from 'react'

const PostDate = ({date}) => {

    const monthDayYear = date => {

        const numberToMonth = {
            '1': "January", '2': "February", '3': "March",
            '4': "April", '5': "May", '6': "June",
            '7': "July", '8': "August", '9': "September",
            '10': "October", '11': "November", '12': "December"
        }

        let day = '1', month = '1', year = '1970';

        try {
            const dateSplit = date.toISOString().split('-');
            [year, month] = dateSplit;
            [day] = dateSplit[2].split('T');
        } catch (err) {
            console.log('Could not format date', err);
        }

        return (
            <>{numberToMonth[month]} {day}, {year}</>
        )
    }

    return (
        <div className='post-date'>
            {
                monthDayYear(date)
            }
        </div>
    )
}

export default PostDate;
