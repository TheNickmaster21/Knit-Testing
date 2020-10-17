import KnitServer from 'shared/Knit/KnitServer';
import { CustomService1 } from './custom-service-1';

KnitServer.CreateService({
    Name: 'Test Service',
    KnitInit: () => print('Test Service Init'),
    KnitStart: () => print('Test Service Start')
});

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

export default {};
