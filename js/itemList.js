// Object to define generic object for any item in carousel list used in the HTML side
/*jshint esversion: 6 */
const portfolioList = [
    {
        src: 'images/dma263_p1.jpg',
        alt: 'DMA 263 Project 1',
        description: 'DMA 263 Project 1',
        className: 'item active',
        id: 'dma263_p1',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/dma263_p2.jpg',
        alt: 'DMA 263 Project 2',
        description: 'DMA263 Project 2',
        className: 'item',
        id: 'dma263_p2',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog109_a4.jpg',
        alt: 'PROG 109 Assignment 4',
        description: 'PROG 109 Assignment 4',
        className: 'item',
        id: 'prog109_a4',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog109_p3.jpg',
        alt: 'PROG 109 Project 3',
        description: 'PROG 109 Project 3',
        className: 'item',
        id: 'prog109_p3',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog209_a2.png',
        alt: 'PROG 209 Assignment 2',
        description: 'PROG 209 Assignment 2',
        className: 'item',
        id: 'prog209_a2',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog209_a7.png',
        alt: 'PROG 209 Assignment 7',
        description: 'PROG 209 Assignment 7',
        className: 'item',
        id: 'prog209_a7',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog209_p1.jpg',
        alt: 'PROG 209 Project 1',
        description: 'PROG 209 Project 1',
        className: 'item',
        id: 'prog209_p1',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog209_p2.jpg',
        alt: 'PROG 209 Project 2',
        description: 'PROG 209 Project 2',
        className: 'item',
        id: 'prog209_p2',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/prog209_p3.jpg',
        alt: 'PROG 209 Project 3',
        description: 'PROG 209 Project 3',
        className: 'item',
        id: 'prog209_p3',
        href: '#modalBox',
        target: ''
    },
    {
        src: 'images/galaga.png',
        alt: 'GALAGA',
        description: 'GALAGA - Play in New Window',
        className: 'item',
        id: 'galaga',
        href: '#modalBox',
        target: ''
    }
];

const yogaList = [
    {
        src: 'images/OneLegForwardDownwardStretch.jpg',
        alt: 'One Leg Forward Downward Stretch',
        description: 'One Leg Forward Downward Stretch',
        className: 'item active',
    },
    {
        src: 'images/WideStanceForwardBend.jpg',
        alt: 'Wide Stance Forward Bend',
        description: 'Wide Stance Forward Bend',
        className: 'item',
    },
    {
        src: 'images/WideStanceRightArmDown.jpg',
        alt: 'Wide Stance One Arm Up One Down',
        description: 'Wide Stance One Arm Up One Down',
        className: 'item',
    },
    {
        src: 'images/WideStanceBothArmDown.jpg',
        alt: 'Wide Stance Arms to Ankle',
        description: 'Wide Stance Arms to Ankle',
        className: 'item',
    },
    {
        src: 'images/RunnersPoseUpwardSalute.jpg',
        alt: 'Runners Pose Upward Salute',
        description: 'Runners Pose Upward Salute',
        className: 'item',
    },
    {
        src: 'images/RunnersPoseDownwardStretch.jpg',
        alt: 'Runners Pose Downward Stretch',
        description: 'Runners Pose Downward Stretch',
        className: 'item',
    },
    {
        src: 'images/RunnersKneeDownHandtoAnkle.jpg',
        alt: 'Runners Knee Down Hand to Ankle',
        description: 'Runners Knee Down Hand to Ankle',
        className: 'item',
    },
    {
        src: 'images/UpwardDog.jpg',
        alt: 'Upward Facing Dog',
        description: 'Upward Facing Dog',
        className: 'item',
    },
    {
        src: 'images/DownwardDogHandtoKnee.jpg',
        alt: 'Downward Facing Dog Hand to Knee',
        description: 'Downward Facing Dog Hand to Knee',
        className: 'item',
    },
    {
        src: 'images/DownwardDogLegUptoHip.jpg',
        alt: 'Downward Facing Dog Leg Up towards Hip',
        description: 'Downward Facing Dog Leg Up towards Hip',
        className: 'item',
    },
    {
        src: 'images/Warrior1.jpg',
        alt: 'Warrior One',
        description: 'Warrior One',
        className: 'item',
    },
    {
        src: 'images/Warrior2.jpg',
        alt: 'Warrior Two',
        description: 'Warrior Two',
        className: 'item',
    },
    {
        src: 'images/WarriorReverse.jpg',
        alt: 'Reverse Warrior',
        description: 'Reverse Warrior',
        className: 'item',
    },
    {
        src: 'images/Triangle.jpg',
        alt: 'Triangle',
        description: 'Triangle',
        className: 'item',
    },
    {
        src: 'images/TriangleReverse.jpg',
        alt: 'Reversed Triangle',
        description: 'Reversed Triangle',
        className: 'item',
    },
    {
        src: 'images/FourLimbStaff.jpg',
        alt: 'Four Limb Staff',
        description: 'Four Limb Staff',
        className: 'item',
    },
    {
        src: 'images/FourLimbStaffKneetoElbow.jpg',
        alt: 'Four Limb Staff Variation',
        description: 'Four Limb Staff Variation',
        className: 'item',
    },
    {
        src: 'images/Chair.jpg',
        alt: 'Chair Prayer',
        description: 'Chair Prayer',
        className: 'item',
    },
    {
        src: 'images/ChairTwistPrayer.jpg',
        alt: 'Chair Twist Prayer',
        description: 'Chair Twist Prayer',
        className: 'item',
    },
    {
        src: 'images/ChairTwistArmUpDown.jpg',
        alt: 'Chair Twist Arms Split',
        description: 'Chair Twist Arms Split',
        className: 'item',
    },
    {
        src: 'images/RightAnglePoseGrab.jpg',
        alt: 'Right Angle Pose Arm Grab',
        description: 'Right Angle Pose Arm Grab',
        className: 'item',
    },
    {
        src: 'images/RunnersPrayer.jpg',
        alt: 'Runners Prayer',
        description: 'Runners Prayer',
        className: 'item',
    },
    {
        src: 'images/RunnersTwistPrayer.jpg',
        alt: 'Runners Twist Prayer',
        description: 'Runners Twist Prayer',
        className: 'item',
    },
    {
        src: 'images/RunnersTwistArmUpDown.jpg',
        alt: 'Runners Twist Arms Split',
        description: 'Runners Twist Arms Split',
        className: 'item',
    },
    {
        src: 'images/SidePlank.jpg',
        alt: 'Side Plank',
        description: 'Side Plank',
        className: 'item',
    },
    {
        src: 'images/Warrior3.jpg',
        alt: 'Warrior Three',
        description: 'Warrior Three',
        className: 'item',
    },
    {
        src: 'images/HalfMoon.jpg',
        alt: 'Half Moon',
        description: 'Half Moon',
        className: 'item',
    },
    {
        src: 'images/HalfMoonReverse.jpg',
        alt: 'Reversed Half Moon',
        description: 'Reversed Half Moon',
        className: 'item',
    }
];
const hobbyList = [
    {
        src: 'images/stage1.jpg',
        alt: 'E55 Air Intake Stage 1',
        description: 'E55 Air Intake Stage 1',
        className: 'item active',
    },
    {
        src: 'images/stage2.jpg',
        alt: 'E55 Air Intake Stage 2',
        description: 'E55 Air Intake Stage 2',
        className: 'item',
    },
    {
        src: 'images/stage3.jpg',
        alt: 'E55 Air Intake Stage 3',
        description: 'E55 Air Intake Stage 3',
        className: 'item',
    },
    {
        src: 'images/stage4.jpg',
        alt: 'E55 Air Intake Stage 4',
        description: 'E55 Air Intake Stage 4',
        className: 'item',
    },
    {
        src: 'images/stage5.jpg',
        alt: 'E55 Air Intake Stage 5',
        description: 'E55 Air Intake Stage 5',
        className: 'item',
    },
    {
        src: 'images/stage6.jpg',
        alt: 'E55 Air Intake Stage 6',
        description: 'E55 Air Intake Stage 6',
        className: 'item',
    }
];
