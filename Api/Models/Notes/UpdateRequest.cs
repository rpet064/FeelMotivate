namespace WebApi.Models.Notes;

using System;
using System.ComponentModel.DataAnnotations;
using WebApi.Entities;


    public class UpdateRequest
    {
        public string Content { get; set; }

        private string ReplaceEmptyWithNull(string value)
        {
            // replace empty string with null to make field optional
            return string.IsNullOrEmpty(value) ? null : value;
        }
    }