export const colors = [
    'Yellow',
    'Blue',
    'White',
    'Green',
    'Red'
]

export const countries = [
    'German',
    'Danish',
    'Norwegian',
    'English',
    'Swedish'
]

export const drinks = [
    'Water',
    'Coffee',
    'Beer',
    'Tea',
    'Milk'
]

export const cigars = [
    'Blends',
    'Bluemaster',
    'Dunhill',
    'Pall Mall',
    'Prince'
]

export const animals = [
    'Dogs',
    'Horses',
    'Cats',
    'Birds',
    'Fish'
]

export const validate = (houses) => {
    let hash = build_empty_checks();

    hash[0].checked = houses[0].country === 'Norwegian';
    hash[7].checked = houses[2].drink === 'Milk';

    for (let i = 0; i < 5; i++) {
        let house = houses[i];
        const left_house = i !== 0 ? houses[i - 1] : null;
        const right_house = i !== 4 ? houses[i + 1] : null;

        if (house.country === 'English' && house.color === 'Red') {
            hash[1].checked = true;
        }

        if (house.country === 'Swedish' && house.animal === 'Dogs') {
            hash[2].checked = true;
        }

        if (house.country === 'Danish' && house.drink === 'Tea') {
            hash[3].checked = true;
        }

        if (i !== 4 && house.color === 'Green' && houses[i + 1].color === 'White') {
            hash[4].checked = true;
        }

        if (house.color === 'Green' && house.drink === 'Coffee') {
            hash[5].checked = true;
        }

        if (house.cigar === 'Pall Mall' && house.animal === 'Birds') {
            hash[6].checked = true;
        }

        if (house.cigar === 'Blends') {
            if (left_house && left_house.animal === 'Cats') {
                hash[8].checked = true;
            } else if (right_house && right_house.animal === 'Cats') {
                hash[8].checked = true;
            }
        }

        if (house.animal === 'Horses') {
            if (left_house && left_house.cigar === 'Dunhill') {
                hash[9].checked = true;
            } else if (right_house && right_house.cigar === 'Dunhill') {
                hash[9].checked = true;
            }
        }

        if (house.cigar === 'Bluemaster' && house.drink === 'Beer') {
            hash[10].checked = true;
        }

        if (house.country === 'Norwegian') {
            if (left_house && left_house.color === 'Blue') {
                hash[11].checked = true;
            } else if (right_house && right_house.color === 'Blue') {
                hash[11].checked = true;
            }
        }

        if (house.cigar === 'Blends') {
            if (left_house && left_house.drink === 'Water') {
                hash[12].checked = true;
            } else if (right_house && right_house.drink === 'Water') {
                hash[12].checked = true;
            }
        }

        if (house.color === 'Yellow' && house.cigar === 'Dunhill') {
            hash[13].checked = true;
        }

        if (house.country === 'German' && house.cigar === 'Prince') {
            hash[14].checked = true;
        }
    }


    return hash;
}

export const build_empty_checks = () => {
    return [
        {
            checked: false,
            description: 'The Norwegian lives in the first house'
        },
        {
            checked: false,
            description: 'The english lives in the Red house'
        },
        {
            checked: false,
            description: 'The swedish have Dogs as pets'
        },
        {
            checked: false,
            description: 'The Danish drinks Tea'
        },
        {
            checked: false,
            description: 'The Green house stays at the left side of the White house'
        },
        {
            checked: false,
            description: 'The man who lives in the Green house drinks Coffee'
        },
        {
            checked: false,
            description: 'The man who smokes Pall Mall have Birds'
        },
        {
            checked: false,
            description: 'The man who lives in the middle house drinks Milk'
        },
        {
            checked: false,
            description: 'The man who smokes Blends lives at the side of who have Cats'
        },
        {
            checked: false,
            description: 'The man who have Horses lives at the side of who smokes Dunhill'
        },
        {
            checked: false,
            description: 'The man who smokes BlueMaster drinks Beer'
        },
        {
            checked: false,
            description: 'The Norwegian lives at the side of the Blue house'
        },
        {
            checked: false,
            description: 'The man who smokes Blends lives at side of who drinks Water'
        },
        {
            checked: false,
            description: 'Who lives in the Yellow house smokes Dunhill'
        },
        {
            checked: false,
            description: 'German smokes Prince'
        }
    ]
}

export const build_empty = () => {
    return [
        {
            id: 0,
            color: '',
            country: '',
            drink: '',
            cigar: '',
            animal: ''
        },
        {
            id: 1,
            color: '',
            country: '',
            drink: '',
            cigar: '',
            animal: ''
        },
        {
            id: 2,
            color: '',
            country: '',
            drink: '',
            cigar: '',
            animal: ''
        },
        {
            id: 3,
            color: '',
            country: '',
            drink: '',
            cigar: '',
            animal: ''
        },
        {
            id: 4,
            color: '',
            country: '',
            drink: '',
            cigar: '',
            animal: ''
        }
    ]
};