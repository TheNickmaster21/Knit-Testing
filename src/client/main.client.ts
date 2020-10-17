import KnitClient from 'shared/Knit/KnitClient';

KnitClient.Start();

abstract class CustomService1 {
    public Name = 'Custom Service 1';
    public abstract async DoTask(who: string): Promise<void>;
}

const CustomService: CustomService1 = KnitClient.GetService('Custom Service 1') as CustomService1;

// This
CustomService.DoTask('client');
