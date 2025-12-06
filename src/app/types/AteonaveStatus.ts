export type AteonaveStatus = 'disconnected' | 'connected' | 'offline' | 'loading';

export function getLocaleName(status: AteonaveStatus): string {
  switch (status) {
    case 'connected':
      return 'Conectado';
    case 'disconnected':
      return 'Desconectado';
    case 'loading':
      return 'Cargando';
    case 'offline':
      return 'Sin conexión';
    default:
      return 'Cargando';
  }
}
