import {rest, setupWorker} from 'msw'

export const worker = setupWorker(
    rest.get('**/actuator', async (req, res, ctx) => {
        return res(
            ctx.json({
                "_links": {
                    "self": {"href": "http://localhost:1234/app/3.0/actuator", "templated": false},
                    "beans": {
                        "href": "http://localhost:1234/app/3.0/actuator/beans",
                        "templated": false
                    },
                    "health": {
                        "href": "http://localhost:1234/app/3.0/actuator/health",
                        "templated": false
                    },
                    "info": {
                        "href": "http://localhost:1234/app/3.0/actuator/info",
                        "templated": false
                    },
                    "conditions": {
                        "href": "http://localhost:1234/app/3.0/actuator/conditions",
                        "templated": false
                    },
                    "configprops": {
                        "href": "http://localhost:1234/app/3.0/actuator/configprops",
                        "templated": false
                    },
                    "configprops-prefix": {
                        "href": "http://localhost:1234/app/3.0/actuator/configprops/{prefix}",
                        "templated": true
                    },
                    "env": {
                        "href": "http://localhost:1234/app/3.0/actuator/env",
                        "templated": false
                    },
                    "env-toMatch": {
                        "href": "http://localhost:1234/app/3.0/actuator/env/{toMatch}",
                        "templated": true
                    },
                    "loggers": {
                        "href": "http://localhost:1234/app/3.0/actuator/loggers",
                        "templated": false
                    }
                }
            })
        )
    }),
)