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
    private users: User[];  // Initializing an empty array to store the users data
  
    constructor() {
      this.users = [];
    }
  
    
    public addUser(user: User): void {  // Adding user to user array 
      this.users.push(user);
    }
  
    
    public getUserById(id: number): User | undefined {  // Getting user by ID from the array 
      return this.users.find((user) => user.id === id);
    }
  
    
    public getUserDevicesByLoggedIn(  // Getting details of the devices that were logged in at a timespan
      loggedIn: Date,
      userId?: number
    ): Device[] | undefined {
      const user = userId ? this.getUserById(userId) : undefined;   // Getting the user by ID
      if (user) {  // Filter the devices array to only include deives that were logged in at the given time
        return user.devices.filter(
          (device) => device.loggedIn.getTime() === loggedIn.getTime()
        );
      }
      return undefined; // Return  undefined if the no user was specified
    }
  
    public getUserDevicesByLoggedOut(  
      loggedOut: Date,
      userId?: number
    ): Device[] | undefined {
      const user = userId ? this.getUserById(userId) : undefined;
      if (user) {
        return user.devices.filter(
          (device) => device.loggedOut.getTime() === loggedOut.getTime()
        );
      }
      return undefined;
    }
  
    public getUserDevicesByLastSeenAt(
      lastSeenAt: Date,
      userId?: number
    ): Device[] | undefined {
      const user = userId ? this.getUserById(userId) : undefined;
      if (user) {
        return user.devices.filter(
          (device) => device.lastSeenAt.getTime() === lastSeenAt.getTime()
        );
      }
      return undefined;
    }
  }