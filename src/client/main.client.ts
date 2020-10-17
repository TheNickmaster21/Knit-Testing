import { CustomService1Client } from 'server/custom-service-1';
import KnitClient from 'shared/Knit/KnitClient';

KnitClient.Start();

const CustomService: CustomService1Client = KnitClient.GetService('Custom Service 1') as CustomService1Client;

CustomService.DoTask('client');
