using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ColdPlay : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "<br>I've been reading books of old<br>The legends and the myths<br>Achilles and his gold<br>Hercules and his gifts<br>Spiderman's control<br>And Batman with his fists<br>And clearly I don't see myself upon that list<br><br>But she said, &quot;Where'd you wanna go?<br>How much you wanna risk?<br>I'm not looking for somebody<br>With some superhuman gifts<br>Some superhero<br>Some fairytale bliss<br>Just something I can turn to<br>Somebody I can kiss<br>I want something just like this&quot;<br><br>Doo-doo-doo, doo-doo-doo<br>Doo-doo-doo, doo-doo<br>Doo-doo-doo, doo-doo-doo<br>Oh, I want something just like this<br>Doo-doo-doo, doo-doo-doo<br>Doo-doo-doo, doo-doo<br>Doo-doo-doo, doo-doo-doo<br><br>Oh, I want something just like this<br>I want something just like this<br>";
        }
    }
}
