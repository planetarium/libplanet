using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace Libplanet.Explorer.Controllers
{
    public class GenericControllerNameConvention
        : Attribute, IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            if (controller.ControllerType.GetGenericTypeDefinition() !=
                typeof(ExplorerController<>))
            {
                return;
            }

            var entityType = controller.ControllerType.GenericTypeArguments[0];
            controller.ControllerName = entityType.Name;
        }
    }

    public class GenericControllerFeatureProvider<T>
        : IApplicationFeatureProvider<ControllerFeature>
    {
        public void PopulateFeature(
            IEnumerable<ApplicationPart> parts, ControllerFeature feature)
        {
            var entityType = typeof(T).GetTypeInfo();
            string typeName = entityType.Name + "Controller";

            // Check to see if there is a "real" controller for this class
            if (feature.Controllers.All(t => t.Name != typeName))
            {
                // Create a generic controller for this type
                var controllerType = typeof(ExplorerController<>)
                    .MakeGenericType(entityType).GetTypeInfo();
                feature.Controllers.Add(controllerType);
            }
        }
    }
}
