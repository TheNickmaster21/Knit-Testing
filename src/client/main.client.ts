import KnitClient from 'shared/Knit/KnitClient';

KnitClient.Start();

interface CustomService1 {
    Name: 'Custom Service 1';
    DoTask: (who: string) => void;
}

const CustomService1: CustomService1 = KnitClient.GetService('Custom Service 1') as CustomService1;

// String client is not getting passed in?
CustomService1.DoTask('client');
