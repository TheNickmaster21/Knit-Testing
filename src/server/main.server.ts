import KnitServer from 'shared/Knit/KnitServer';

KnitServer.CreateService({
    Name: 'Test Service',
    KnitInit: () => print('Test Service Init'),
    KnitStart: () => print('Test Service Start')
});

const CustomService1 = {
    Name: 'Custom Service 1',
    KnitInit: () => print('Custom Service 1 Init'),
    DoTask: (who: string) => {
        print(`Did Task for ${who}!`);
    },
    Client: {
        // Service has to be the first argument because Lua reasons?
        DoTask: (service: unknown, player: Player, who: string) => {
            print(`Did Task for ${who} (Player ${player.Name})!`);
        }
    }
};

KnitServer.CreateService(CustomService1);

const CustomService2 = {
    Name: 'Custom Service 2',
    KnitInit: () => print('Custom Service 2 Init'),
    KnitStart: () => {
        CustomService1.DoTask('server');
    }
};

KnitServer.CreateService(CustomService2);

KnitServer.Start().then(() => {
    print('Started Knit!');
});

export {};
