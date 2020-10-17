// TODO Find a more clever solution to avoid needing the abstract client class
export abstract class CustomService1Client {
    public Name = 'Custom Service 1';
    public abstract async DoTask(who: string): Promise<void>;
}

export const CustomService1 = {
    Name: 'Custom Service 1',
    KnitInit: () => print('Custom Service 1 Init'),
    DoTask: (who: string) => {
        print(`Did Task for ${who}!`);
    },
    Client: {
        DoTask(player: Player, who: string): void {
            print(`Did Task for ${who} (Player ${player.Name})!`);
        }
    }
};
