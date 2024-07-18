declare module 'react-native-lock-task' {
    const lockTask: {
        isAppInLockTaskMode: () => boolean;
        startLockTask: () => void;
        startLockTaskWith: (packages: string[]) => void;
        stopLockTask: () => void;
        clearDeviceOwnerApp: () => void;
    };

    export default lockTask;
}
