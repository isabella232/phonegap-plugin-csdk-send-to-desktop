/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

var CSDKSendToDesktop = {
    send: function(successCallback, failureCallback, uri, ccApplication, mimeType) {
        exec(successCallback, failureCallback, 'CSDKSendToDesktop', 'send', [uri, ccApplication, mimeType]);
    },

    /**
    * @enum {number}
    */
   AppType:{
       PHOTOSHOP: 0,
       INDESIGN: 1,
       ILLUSTRATOR: 2
   }
};

module.exports = CSDKSendToDesktop;
