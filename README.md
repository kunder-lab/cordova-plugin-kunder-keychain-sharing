<!---
license: Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

# cordova-plugin-kunder-keychain-sharing

This cordova plugin enables you to use iOS Keychain to manage accounts of one user and share with other applications of the same company (e.g google apps like gmail, youtube, etc).


## Installation

```
cordova plugin add https://github.com/sebalagos90/cordova-plugin-kunder-keychain-sharing
```


## Supported Platforms

- iOS

## Methods

- registerAccount: register an user in Keychain
- removeAccount: remove all data from Keychain
- getUserAccount: returns an String with account name if account exist
- getPassword: returns password if account exist
- getDataFromKey: returns data from specified key
- setUserData: set object with information into Account Manager or Keychain
- setPassword: update account password
- resetPassword: update account password with String "0000"

## Key Parameters

- group (Nullable): group identifier. Only for shared keychain
- data: key-value object

## License

Apache License 2.0

