interface User {
    id: number;
    name: string;
    devices: Device[];
  }
  
  interface Device {
    id: number;
    name: string;
    loggedIn: Date;
    loggedOut: Date;
    lastSeenAt: Date;
  }
  
  class UserService {
    // Initialize an empty array to store the users
    private users: User[];
  
    constructor() {
      this.users = [];
    }
  
    // Add a user to the users array
    public addUser(user: User): void {
      this.users.push(user);
    }
  
    // Get a user by ID from the users array
    public getUserById(id: number): User | undefined {
      return this.users.find((user) => user.id === id);
    }
  
    // Get devices that were logged in at a given timestamp, optionally filtered by user ID
    public getUserDevicesByLoggedIn(
      loggedIn: Date,
      userId?: number
    ): Device[] | undefined {
      // Get the user by ID, if specified
      const user = userId ? this.getUserById(userId) : undefined;
      // If a user was specified, filter the devices array to only include devices that were logged in at the given timestamp
      if (user) {
        return user.devices.filter(
          (device) => device.loggedIn.getTime() === loggedIn.getTime()
        );
      }
      // If no user was specified, return undefined
      return undefined;
    }
  
    // Get devices that were logged out at a given timestamp, optionally filtered by user ID
    public getUserDevicesByLoggedOut(
      loggedOut: Date,
      userId?: number
    ): Device[] | undefined {
      // Get the user by ID, if specified
      const user = userId ? this.getUserById(userId) : undefined;
      // If a user was specified, filter the devices array to only include devices that were logged out at the given timestamp
      if (user) {
        return user.devices.filter(
          (device) => device.loggedOut.getTime() === loggedOut.getTime()
        );
      }
      // If no user was specified, return undefined
      return undefined;
    }
  
    // Get devices that were last seen at a given timestamp, optionally filtered by user ID
    public getUserDevicesByLastSeenAt(
      lastSeenAt: Date,
      userId?: number
    ): Device[] | undefined {
      // Get the user by ID, if specified
      const user = userId ? this.getUserById(userId) : undefined;
      // If a user was specified, filter the devices array to only include devices that were last seen at the given timestamp
      if (user) {
        return user.devices.filter(
          (device) => device.lastSeenAt.getTime() === lastSeenAt.getTime()
        );
      }
      // If no user was specified, return undefined
      return undefined;
    }
  }