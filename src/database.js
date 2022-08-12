const dates = [
    {
      id: 1,
      title: 'On August 11, 2022, React Router 6',
      text: [
        `Vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
        non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
        eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
        sodales purus euismod.`,
        `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ]
    },
    {
        id: 2,
        title: 'On August 17, 2022, NavLink',
        text: [
            `Turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },
    {
        id: 3,
        title: 'On August 21, 2022, parseInt()',
        text: [
            `In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },
  ];
  
  export function getDates() {
    return dates;
  }

  export function getDate(id) {
    return dates.find(
      (date) => date.id === id
    );
  }