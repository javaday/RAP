﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class BuildingFile : BaseDate
    {
        #region Properties
        [Key]
        public virtual string Id { get; set; }

        public virtual string BuildingId { get; set; }
        public virtual string FileId { get; set; }
        public virtual string Title { get; set; }
        public virtual string Description { get; set; }
        public virtual BuildingFileType Type { get; set; }

        #region Navigation Properties
        public virtual Building Building { get; set; }
        public virtual Files File { get; set; }
        #endregion
        #endregion
    }
}
