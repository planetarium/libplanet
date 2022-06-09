#nullable disable
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// MonoSingleton.
    /// </summary>
    /// <typeparam name="T">The type.</typeparam>
    public abstract class MonoSingleton<T> : MonoBehaviour
        where T : MonoSingleton<T>
    {
        private static readonly object Lock = new object();
        private static T _instance = null;
        private static bool _appLicationIsQuitting;

        /// <summary>
        /// MonoSingleton.
        /// </summary>
        public static T Instance
        {
            get
            {
                if (_appLicationIsQuitting)
                {
                    Debug.Log(
                        $"[MonoSingleton]Instance '{typeof(T)}' " +
                        "already destroyed on application quit. " +
                        "Won't create again - returning null.");
                    return _instance;
                }

                lock (Lock)
                {
                    if (_instance != null)
                    {
                        return _instance;
                    }

                    _instance = (T)FindObjectOfType(typeof(T));

                    if (_instance == null)
                    {
                        _instance = new GameObject(
                            typeof(T).ToString(), typeof(T)).GetComponent<T>();

                        Debug.Log(_instance == null
                            ? $"[MonoSingleton]Something went really wrong - " +
                            "there should never be more than 1 singleton! " +
                            "Reopening the scene might fix it."
                            : $"[MonoSingleton]An instance of {typeof(T)} " +
                            "is needed in the scene, " +
                            "so '{_instance.name}' was created with DontDestroyOnLoad.");
                    }

                    if (FindObjectsOfType(typeof(T)).Length > 1)
                    {
                        Debug.Log(
                            $"[MonoSingleton]Something went really wrong - " +
                            "there should never be more than 1 singleton! " +
                            "Reopening the scene might fix it.");
                    }

                    return _instance;
                }
            }
        }

        /// <summary>
        /// Unity Engine Mono Awake.
        /// </summary>
        protected virtual void Awake()
        {
            if (_instance == null)
            {
#pragma warning disable S2696
                _instance = (T)this;
#pragma warning restore S2696

                DontDestroyOnLoad(gameObject);
            }
            else
            {
                Debug.Log($"{typeof(T)} already exist!");

                Destroy(gameObject);
            }
        }

        /// <summary>
        /// Unity Engine Mono OnDestroy.
        /// </summary>
        protected virtual void OnDestroy()
        {
        }

        /// <summary>
        /// Unity Engine Mono OnApplicationQuit.
        /// </summary>
        protected virtual void OnApplicationQuit()
        {
#pragma warning disable S2696
            _appLicationIsQuitting = true;
#pragma warning restore S2696
        }
    }
}
