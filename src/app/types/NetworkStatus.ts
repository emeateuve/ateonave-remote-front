export type NetworkStatus = 'full' | 'med' | 'low' | '';
export type NetworkStatusResponse = {
  pcAlive: boolean;
  message: string;
  pingTime: number;
};
export function getNetworkStatusImage(state: NetworkStatus): string {
  const spritesFolder = '/assets/sprites';
  return state ? `${spritesFolder}/signal_${state}.png` : `${spritesFolder}/signal.png`;
}
